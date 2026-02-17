import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h3>
          {user?.name?.firstname} {user?.name?.lastname}
        </h3>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>City:</b> {user?.address?.city}</p>
        <p><b>Street:</b> {user?.address?.street}</p>

        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </Card>
    </Container>
  );
}

export default UserDetails;
