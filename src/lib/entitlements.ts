/**
 * Entitlement gating (TO BUILD).
 *
 * Guide launch bridge will redeem a short-lived token via
 * POST {GUIDE_URL}/api/apps/launch/exchange and optionally
 * GET {GUIDE_URL}/api/apps/entitlements?slug=arcade-education.
 *
 * Until that lands, treat the session as ungated for local UI work.
 */

export type ArcadeClaims = {
  profileId: string;
  schoolId?: string;
  classroomIds?: string[];
};

export type EntitlementState =
  | { status: "unknown" }
  | { status: "entitled"; claims: ArcadeClaims }
  | { status: "denied"; reason: string };

/** Stub — always unknown until launch exchange is wired. */
export function getEntitlementStub(): EntitlementState {
  return { status: "unknown" };
}

/** Stub token exchange — replace with Guide API call. */
export async function exchangeLaunchTokenStub(
  token: string,
): Promise<EntitlementState> {
  if (!token.trim()) {
    return { status: "denied", reason: "Missing launch token." };
  }
  // TODO: POST to Guide /api/apps/launch/exchange
  return {
    status: "entitled",
    claims: {
      profileId: "stub-profile",
      classroomIds: [],
    },
  };
}
