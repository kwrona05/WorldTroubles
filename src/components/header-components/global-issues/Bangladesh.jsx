import React from "react";
import BackHome from "../../BackHome";

const Bangladesh = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2 data-testid="header2">Bangladesh</h2>
      <div className="description" data-testid="description2">
        <p>
          Bangladesh faces significant challenges in accessing clean water,
          mainly due to pollution, overpopulation, and environmental factors.
          Rapid urbanization has led to contamination of both surface and
          groundwater sources. Rivers and water bodies are heavily polluted by
          industrial waste, agricultural runoff, and untreated sewage, which
          increases the risk of waterborne diseases among the population.
          Additionally, arsenic contamination in groundwater poses a serious
          health risk in many rural areas, where wells, a common water source,
          often contain dangerous levels of arsenic. Another problem is the
          country’s vulnerability to natural disasters, including floods and
          cyclones, which contaminate water supplies with saltwater and
          pollutants, especially in coastal regions. Climate change is
          exacerbating these issues, increasing both the frequency and severity
          of these natural events, and leading to more extensive salinization of
          freshwater sources. Efforts are being made to address these issues,
          such as developing arsenic-free wells and desalination plants, but
          challenges remain due to limited resources and infrastructure.
        </p>
      </div>
    </div>
  );
};
export default Bangladesh;
