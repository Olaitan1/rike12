import React, { useState } from "react";
import Chip from './assets/chip.png';

const CreditCard2 = () => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState({
    number: false,
    expiryDate: false,
    cvv: false,
  });
  let currentYear = new Date().getFullYear().toString();
  var currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

  return (
    <div className="flex flex-col justify-center items-center   ">
      <div className="flex flex-col justify-center  items-center md:gap-20 sm:gap-16  gap-7 shadow-sm px-0 sm:px-5 rounded-3xl md:px-8 sm:py-20 py-8">
        <div className="flex md:flex-row flex-col  items-center justify-center md:gap-20 gap-12">
          <div className="flex flex-col px-2">
            {(error.expiryDate || error.number) && (
              <div className="text-xs text-red-600 h-9">
                {error.expiryDate
                  ? "Please enter valid expiry date"
                  : "Please enter valid card number"}
              </div>
            )}
            <div className=" max-w-30 ml-28  shadow-3xl transition duration-400  hover:scale-105 rounded-lg">
              <div className="top-0   flex flex-col justify-between h-48   rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                
              >
                <div className="flex justify-between leading-3 items-center ">
                  <img src={Chip} alt="Icon" className="w-5" />
                  <Visa />
                </div>
                <div className="flex">
                  <span className="flex items-center text-base top-3">
                    <LeftCaret />
                    <input
                      className="bg-transparent focus:outline-none border border-transparent focus:border-black rounded-md px-1 w-5/6"
                      type="text"
                      value={cc_format(creditCardDetails?.number)}
                      onChange={(e) => {
                        const { value } = e?.target;
                        let finalValue = value.replaceAll(" ", "");
                        isNaN(finalValue)
                          ? setError({ ...error, number: true })
                          : finalValue.length < 16
                          ? setError({ ...error, number: true })
                          : setError({ ...error, number: false });
                        setCreditCardDetails({
                          ...creditCardDetails,
                          number: value,
                        });
                      }}
                    />
                  </span>
                </div>
                <div className="flex flex-row font-bold justify-between text-sm text-gradient-to-r from-black to-gray-200">
                  <span className="w-4/6">
                    <input
                      className="focus:outline-none border border-transparent focus:border-black rounded-md px-1"
                      type="text"
                      value={creditCardDetails?.ownerName}
                      maxLength="21"
                      onChange={(e) =>
                        setCreditCardDetails({
                          ...creditCardDetails,
                          ownerName: e?.target?.value,
                        })
                      }
                    />
                  </span>
                  <span>
                    <input
                      className="bg-transparent focus:outline-none border  border-transparent focus:border-black rounded-md px-1 w-18"
                      type="text"
                      value={cc_expires_format(creditCardDetails?.expiryDate)}
                      maxLength="5"
                      onChange={(e) => {
                        const { value } = e?.target;
                        value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2})$)/)
                          ? value.slice(-2) < currentYear.slice(-2)
                            ? setError({ ...error, expiryDate: true })
                            : value.slice(-2) === currentYear.slice(-2) &&
                              value.slice(0, 2) <= currentMonth
                            ? setError({ ...error, expiryDate: true })
                            : setError({ ...error, expiryDate: false })
                          : setError({ ...error, expiryDate: true });
                        setCreditCardDetails({
                          ...creditCardDetails,
                          expiryDate: value,
                        });
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-4">
            {error.cvv && (
              <span className="text-xs text-red-600 h-9">
                Please enter valid cvv number
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard2;
const defaultData = {
  number: "1234567812349546",
  ownerName: "Nex Smith",
  expiryDate: "07/24",
  cvv: "133",
};
export function cc_format(value) {
  var v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .replace(/\D/g, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  let len, i;
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
   
    return "**** **** **** " + parts[parts.length - 1];
  } else {
    return v;
  }
}
export function cc_expires_format(string) {
  return string
    .replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      "$1/$2" // To handle 113 > 11/3
    );
}
const Visa = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="h-8 w-12"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m22.221 15.768l-.224-1.125h-2.514l-.4 1.117l-2.015.004c1.295-3.113 2.257-5.418 2.884-6.917c.164-.392.455-.592.884-.589c.328.003.863.003 1.606.001L24 15.765l-1.779.003Zm-2.172-2.666h1.62l-.605-2.82l-1.015 2.82ZM7.06 8.257l2.026.002l-3.132 7.51l-2.051-.002a951.26 951.26 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804A60.876 60.876 0 0 0 0 8.466v-.207h3.237c.56 0 .887.271.992.827c.106.557.372 1.976.8 4.254L7.06 8.257Zm4.81.002l-1.601 7.509l-1.929-.003l1.6-7.508l1.93.002Zm3.91-.139c.577 0 1.304.18 1.722.346l-.338 1.556c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.958.62 1.085 1.177 1.073 1.783c-.013 1.255-1.073 2.494-3.309 2.494c-1.02-.015-1.388-.1-2.22-.396l.352-1.624c.847.354 1.206.467 1.93.467c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907c-.744-.411-1.788-.979-1.774-2.122c.017-1.462 1.402-2.443 3.368-2.443Z"
      />
    </svg>
  );
};
const LeftCaret = () => {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-xl mt-0.5 mr-1"
    >
      <path
        d="M12.5655 0.785121L12.701 14.4904L0.764073 7.75511L12.5655 0.785121Z"
        fill="#000000"
      />
    </svg>
  );
};
