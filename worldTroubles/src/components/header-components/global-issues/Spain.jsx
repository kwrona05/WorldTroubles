import React from "react";
import BackHome from "../../BackHome";

const Spain = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2 data-testid="header6">Horror in Valencia</h2>
      <div className="description" data-testid="description6">
        <p>
          In late October 2024, Valencia in Spain experienced a devastating
          flood, which has been recognized as one of the most significant
          natural disasters in the region's history. Rainfall during this period
          reached an annual level within just a few hours, leading to the
          overflow of rivers such as the Rambla del Poyo. The disaster
          particularly impacted the cities of Paiporta, Alfafar, and Chiva.
          Tragically, over 150 people lost their lives, with many more injured
          or reported missing. Additionally, more than 100,000 people were left
          without power. Satellite images published by the European Space Agency
          (ESA) capture the extent of the flooding, which you can view{" "}
          <a
            href="https://www.esa.int/ESA_Multimedia/Images/2024/10/Valencia_flood_disaster
"
          >
            here
          </a>
          . Citizens criticized the authorities' response, especially
          highlighting delayed public warnings, which left little time for
          proper preparation for the impending danger.
        </p>
      </div>
    </div>
  );
};

export default Spain;
