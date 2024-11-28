import BioCard from "../components/BioCards";

export default function Jane() {
  return (
    <>
      {/* <h1>Jane</h1>*/}
      <BioCard
        profilePic={
          "https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg?w=300"
        }
        name={"Jane Smith"}
        quote={"weh ngapain engkau sayang sama aku"}
        location={"idih kepo lu"}
        github={"https://www.google.com/"}
      />
    </>
  );
}
