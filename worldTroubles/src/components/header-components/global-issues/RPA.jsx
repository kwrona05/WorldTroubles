import React from "react";
import BackHome from "../../BackHome";

const SouthAfrica = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2 data-testid="header5">South Africa</h2>
      <div className="description" data-testid="description5">
        <p>
          South Africa is facing a severe water crisis, driven by a combination
          of factors including climate change, population growth, and poor
          infrastructure management. The country has long struggled with water
          scarcity, receiving much lower than average rainfall compared to
          global standards. Moreover, periods of drought, like the one from 2015
          to 2018, severely depleted water resources and affected the nation's
          reservoirs. Despite some recent rains, regions like the Eastern Cape
          are still suffering from water shortages, with reservoirs operating
          well below capacity. In urban areas like Johannesburg, the situation
          has become increasingly dire. Crumbling infrastructure, particularly
          leaking pipes and non-functioning water systems, has exacerbated the
          problem. Some areas have experienced "watershedding" (similar to power
          outages), where water supply is cut off for extended periods. This has
          led to the widespread use of water tankers, though they are
          insufficient to meet demand. Additionally, poor maintenance,
          pollution, and high water usage contribute to the ongoing crisis. The
          government and local communities are struggling to find long-term
          solutions, while the population continues to endure increasing
          hardships from the water scarcity.
        </p>
      </div>
    </div>
  );
};
export default SouthAfrica;
