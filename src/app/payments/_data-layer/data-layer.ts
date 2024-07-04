type BaseUserInfo = {
  email: string;
  firstName: string;
  lastName: string;
};

export function createPaymentLink({
  email,
  firstName,
  lastName,
}: BaseUserInfo) {
  return fetch("https://sandbox.dev.business.mamopay.com/manage_api/v1/links", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.PUBLIC_MAMO_API_KEY}`,
    },
    body: JSON.stringify({
      link_type: "inline",
      email,
      first_name: firstName,
      last_name: lastName,
    }),
  }).then((res) => res.json());
}
