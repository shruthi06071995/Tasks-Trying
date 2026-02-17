import { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  let result = [...users];

  // SEARCH
  result = result.filter(user =>
    user.name.firstname.toLowerCase().includes(search.toLowerCase())
  );

  // FILTER by city
  if (filter) {
    result = result.filter(user =>
      user.address.city.toLowerCase().includes(filter.toLowerCase())
    );
  }

  // SORT by firstname
  if (sort === "asc") {
    result.sort((a, b) =>
      a.name.firstname.localeCompare(b.name.firstname)
    );
  } else if (sort === "desc") {
    result.sort((a, b) =>
      b.name.firstname.localeCompare(a.name.firstname)
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Users Store </h2>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            placeholder="Search First Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Control
            placeholder="Filter by City"
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        {result.map(user => (
          <Col md={4} className="mb-4" key={user.id}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>
                  {user.name.firstname} {user.name.lastname}
                </Card.Title>

                <Card.Text>
                  {user.email}
                </Card.Text>

                <Card.Text>
                  {user.address.city}
                </Card.Text>

                <Link to={`/user/${user.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Users;
