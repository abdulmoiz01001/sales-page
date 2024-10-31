import { Card2 } from "./Card.jsx";
// import image from "pro.jfif";

export const Card2Example = () => {
  const handleProfile = () => {
    // goto profile
  };

  const handleFollow = () => {
    // follow account
  };

  return (
    <section className="page card-2-example-page">
      <Card2
        image={"pro.jfif"}
        title="Nicky Romano"
        subtitle="Freelancer"
        description="Shareing My Journey To 6 Figures w / Digital Products"
        onProfile={handleProfile}
        onFollow={handleFollow}
      />
 </section>
  );
};