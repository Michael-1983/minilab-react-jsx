import logo from "../assets/images/puppy.jpg";
function Profile() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={logo} className="card-img-top" alt="Foto de um cão" />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
export default Profile;
