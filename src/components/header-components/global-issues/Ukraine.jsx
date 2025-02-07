import React from "react";
import BackHome from "../../BackHome";

const Ukraine = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2 data-testid="header8">War in Ukraine</h2>
      <div className="description" data-testid="description8">
        <p>
          The war in Ukraine began in February 2022, when Russia launched a
          large-scale invasion of Ukraine, escalating the ongoing conflict that
          had started in 2014 with Russia's annexation of Crimea and its support
          for separatist groups in eastern Ukraine. The 2022 invasion led to
          widespread fighting across the country, including the siege of major
          cities like Kyiv, Mariupol, and Kharkiv. The war has resulted in
          significant loss of life, extensive damage to infrastructure, and
          millions of displaced people, both within Ukraine and abroad. Ukraine
          has received extensive military and humanitarian support from Western
          countries, while Russia has faced international sanctions. Despite
          initial Russian advances, Ukraine's resistance and counteroffensives
          have led to significant territorial recoveries, but the war remains
          ongoing with no clear resolution in sight. The conflict has profound
          geopolitical implications, with NATO and the European Union backing
          Ukraine, while Russia faces increasing isolation. The humanitarian
          crisis continues to worsen, as millions struggle with displacement and
          the destruction of homes and cities.
        </p>
      </div>
    </div>
  );
};
export default Ukraine;
