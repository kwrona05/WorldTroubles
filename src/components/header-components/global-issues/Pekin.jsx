import React from "react";
import BackHome from "../../BackHome";

const Pekin = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2 data-testid="header4">Invisible poison</h2>
      <div className="description" data-testid="description4">
        <p>
          Wyszukano 4 witryny Air pollution in Beijing has been a significant
          environmental issue for years, largely due to the city's rapid
          industrialization, high vehicle emissions, and dependence on coal for
          heating, especially during winter. Over the past decade, the city has
          made considerable progress in reducing pollution levels through
          various initiatives. These include replacing coal with cleaner energy
          sources, restricting vehicle growth, and relocating heavy industries.
          Afforestation projects have also reduced the frequency of sandstorms,
          once common in Beijing. Despite these efforts, the city continues to
          struggle with pollution. For instance, in October 2024, Beijing faced
          its worst air pollution in over five months, with particulate matter
          (PM2.5) levels rising sharply. This pollution is primarily attributed
          to industrial activities and vehicle emissions, exacerbated by
          unfavorable weather conditions. Though air quality has improved since
          2013, Beijing's annual average PM2.5 levels still exceed the World
          Health Organization's recommendations. Beijing's government has also
          implemented measures such as driving bans, license plate lotteries,
          and restrictions on older vehicles to reduce pollution. However,
          challenges remain, particularly due to the economic growth that often
          conflicts with environmental goals
        </p>
      </div>
    </div>
  );
};
export default Pekin;
