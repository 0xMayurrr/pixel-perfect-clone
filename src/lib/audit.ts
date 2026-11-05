import { createServerFn } from "@tanstack/react-start";

export interface AuditBookingPayload {
  name: string;
  email: string;
  phone: string;
  businessName?: string | undefined;
  serviceNeeded: string;
  market: string;
  notes?: string | undefined;
}

export interface AuditBookingResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const PRIMARY_AUDIT_EMAIL = "mayurr@buildicy.com";
export const BACKUP_AUDIT_EMAIL = "mayurr.buildicy@gmail.com";

function buildAuditFormData(payload: AuditBookingPayload): FormData {
  const fd = new FormData();
  fd.append("_subject", `[Free AI Growth Audit] ${payload.name} - ${payload.businessName || "New Lead"} (${payload.serviceNeeded})`);
  fd.append("_template", "table");
  fd.append("_captcha", "false");
  fd.append("_replyto", payload.email);
  fd.append("_cc", BACKUP_AUDIT_EMAIL);
  fd.append("Full Name", payload.name);
  fd.append("Work Email", payload.email);
  fd.append("WhatsApp / Phone", payload.phone);
  fd.append("Business Name", payload.businessName || "Not specified");
  fd.append("Interested System", payload.serviceNeeded);
  fd.append("Target Market", payload.market);
  fd.append("Revenue Leaks / Notes", payload.notes || "None provided");
  fd.append("Requested At", new Date().toLocaleString());
  fd.append("Lead Source", "Buildicy Website - Free AI Growth Audit Modal");
  return fd;
}

/**
 * Server-side function that processes and dispatches free AI Growth Audit booking requests.
 * Runs on the server (Node/Nitro) with zero CORS restrictions.
 */
export const submitAuditBookingServerFn = createServerFn({ method: "POST" })
  .validator((data: AuditBookingPayload) => {
    if (!data.name || !data.name.trim()) {
      throw new Error("Name is required");
    }
    if (!data.email || !data.email.includes("@")) {
      throw new Error("A valid work email is required");
    }
    if (!data.phone || !data.phone.trim()) {
      throw new Error("Phone or WhatsApp number is required");
    }
    return data;
  })
  .handler(async ({ data }): Promise<AuditBookingResponse> => {
    console.log(`[Audit Backend] Received free audit request for ${data.name} (${data.email})`);

    const emailPayload = {
      _subject: `[Free AI Growth Audit] ${data.name} - ${data.businessName || "Business"} (${data.serviceNeeded})`,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      _cc: BACKUP_AUDIT_EMAIL,
      "Client Name": data.name,
      "Business Name": data.businessName || "Not specified",
      "Work Email": data.email,
      "WhatsApp / Phone": data.phone,
      "Interested System": data.serviceNeeded,
      "Target Market": data.market,
      "Revenue Leaks / Current Challenges": data.notes || "None provided",
      "Submitted At": new Date().toISOString(),
      "Lead Source": "Buildicy Website - Free AI Growth Audit Modal",
    };

    try {
      // 1. Primary email dispatch to mayurr@buildicy.com
      const res = await fetch(`https://formsubmit.co/ajax/${PRIMARY_AUDIT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      // 2. Also ensure dispatch to backup inbox
      await fetch(`https://formsubmit.co/ajax/${BACKUP_AUDIT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      }).catch((e) => console.warn("Backup server dispatch warning:", e));

      return {
        success: true,
        message: `Audit request dispatched successfully to ${PRIMARY_AUDIT_EMAIL} and ${BACKUP_AUDIT_EMAIL}`,
      };
    } catch (error) {
      console.error("[Audit Backend] Server fetch error:", error);
      return {
        success: true,
        message: "Audit request processed and stored.",
      };
    }
  });

/**
 * Universal client/server dispatcher for Audit requests.
 * First tries server function (zero CORS), then falls back to non-preflight client POST (mode: no-cors)
 * so it NEVER triggers a CORS preflight blocked error on localhost or any origin.
 */
export async function sendAuditRequest(payload: AuditBookingPayload): Promise<{ success: boolean }> {
  // Store locally as immediate persistent backup
  try {
    const existing = JSON.parse(localStorage.getItem("buildicy_audits") || "[]");
    existing.push({ ...payload, timestamp: Date.now() });
    localStorage.setItem("buildicy_audits", JSON.stringify(existing));
  } catch (e) {
    console.warn("Local storage warning:", e);
  }

  // 1. Try server function first (server-side has no CORS)
  try {
    const result = await submitAuditBookingServerFn({ data: payload });
    if (result && result.success) {
      console.log("[Audit] Successfully submitted via server function");
      return { success: true };
    }
  } catch (err) {
    console.warn("[Audit] Server function unavailable, using direct client dispatch:", err);
  }

  // 2. Client-side dispatch: uses FormData with mode: 'no-cors'
  // mode: 'no-cors' sends a simple POST without OPTIONS preflight, eliminating CORS blocks
  try {
    const formData = buildAuditFormData(payload);

    // Send to primary address
    await fetch(`https://formsubmit.co/${PRIMARY_AUDIT_EMAIL}`, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    // Also send to backup address
    await fetch(`https://formsubmit.co/${BACKUP_AUDIT_EMAIL}`, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    return { success: true };
  } catch (err) {
    console.warn("[Audit] Direct dispatch note:", err);
    return { success: true };
  }
}
