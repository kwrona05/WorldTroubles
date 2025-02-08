import BackHome from "../../BackHome";
import React from "react";

const HealthCare = () => {
  return (
    <div className="detail-container">
      <BackHome />
      <h2>Healthcare</h2>
      <div className="description">
        <p>
          Healthcare faces a range of critical issues worldwide, often centered
          on accessibility, quality, and affordability. In many countries, the
          cost of healthcare services and medicines is prohibitive, leading to
          financial strain for individuals and families. This problem is
          exacerbated by insufficient insurance coverage and high out-of-pocket
          expenses, which can make essential medical care unattainable for many.
          In low-income regions, there is also a shortage of medical
          infrastructure, hospitals, and trained healthcare professionals,
          resulting in overcrowded facilities and limited access to basic
          services. Additionally, rural and remote areas often lack sufficient
          healthcare resources, forcing patients to travel long distances for
          treatment. Meanwhile, even in wealthier countries, disparities
          persist, with marginalized communities experiencing unequal access to
          quality care due to socioeconomic factors, location, or systemic
          biases. Aging populations, chronic diseases, and emerging health
          crises like pandemics add further strain to healthcare systems,
          highlighting the need for efficient, equitable, and resilient
          healthcare solutions. Addressing these challenges involves investing
          in public health infrastructure, expanding access to affordable care,
          training medical professionals, and implementing policies that
          prioritize preventive care and health education.
        </p>
        <p>
          If you want to read more or support click
          <a href="https://www.who.int"> here</a>
        </p>
      </div>
    </div>
  );
};
export default HealthCare;
