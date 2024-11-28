import "./BioCards.css";

interface Prop {
  profilePic: string;
  name: string;
  location: string;
  quote: string;
  github?: string;
}

export default function BioCard(prop: Prop) {
  return (
    <div className="card">
      <div className="profile">
        <div className="image">
          <img src={prop.profilePic} alt="Photo profile." />
        </div>
        <p className="name">{prop.name}</p>
        <p className="location">{prop.location}</p>
        <p className="bio">{prop.quote}</p>
      </div>
      <div className="links">
        <a href={prop.github} target="_blank">
          GitHub
        </a>
        <a href="https://frontendmentor.com">FrontEnd Mentor</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://x.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </div>
  );
}
