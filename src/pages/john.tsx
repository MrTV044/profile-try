import BioCard from "../components/BioCards";

export default function John() {
  return (
    <>
      {/* <h1>John</h1> */}
      <BioCard
        profilePic={"/Loren1.jpeg"}
        name={"Lorencia Dinara"}
        quote={"Siapa blg gw suka marah2, lu yang annoying"}
        location={"di hatiku"}
        github={"https://www.google.com/"}
      />
    </>
  );
}
