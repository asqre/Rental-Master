import React, { useState } from "react";

const TermsAndConditionField = ({ label, id, value }) => {
  const [terms, setTerms] = useState(
    `• Offer is valid only on Daily Rentals bookings made through the MyChoize website and IOS/Android app.
    • Offer is valid for bookings till 31st October'24.
    • Customer can get flat 15% off on Daily Rentals. Minimum Rental Amount should be Rs.3,000.
    • Discount is applicable only on rental amount and not on the security deposit.
    • Discount amount would be automatically calculated once customer enters promo code.
    • Customer cannot club 2 offers in one single transaction.
    • MyChoize has right to amend/withdraw offer anytime without prior intimation.
    • In case of any dispute, decision of MyChoize will be final and binding.`
  );

  const handleTermsChange = (e) => {
    let value = e.target.value;

    const lines = value.split("\n");

    const processedLines = lines.map((line) => {
      line = line.trim();
      if (line && !line.startsWith("•")) {
        return `• ${line}`;
      }
      return line;
    });

    setTerms(processedLines.join("\n"));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const cursorPosition = e.target.selectionStart;
      const currentValue = e.target.value;

      const beforeCursor = currentValue.substring(0, cursorPosition);
      const afterCursor = currentValue.substring(cursorPosition);

      const newValue = beforeCursor + "\n• " + afterCursor;
      setTerms(newValue);

      setTimeout(() => {
        e.target.selectionStart = cursorPosition + 3;
        e.target.selectionEnd = cursorPosition + 3;
      }, 0);
    }
  };

  return (
    <div className="flex flex-col space-y-[8px]">
      <div
        style={{
          fontFamily: "Noto Sans",
          fontWeight: 600,
          color: "#666666",
          fontSize: "12px",
          lineHeight: "18px",
        }}
      >
        {label}
      </div>

      <div className="relative">
        <textarea
          value={terms}
          onChange={handleTermsChange}
          onKeyDown={handleKeyDown}
          rows={10}
          className="mt-1 block w-full rounded-md border-gray shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-2 border font-mono"
          placeholder="Enter terms and conditions (press Enter for new point)"
        />

        <h6 className="absolute bottom-2 right-2 text-tertiary">
          Press Enter for new point
        </h6>
      </div>
    </div>
  );
};

export default TermsAndConditionField;
