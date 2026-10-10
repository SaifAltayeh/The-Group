export type WalletActionResult = {
  ok: false;
  title: string;
  message: string;
};

export function requestLoyaltyCard(): WalletActionResult {
  return {
    ok: false,
    title: "Loyalty card enrollment is not configured",
    message:
      "Adding a digital loyalty card requires membership data, pass-generation credentials, and a backend that is not connected to this demonstration.",
  };
}
