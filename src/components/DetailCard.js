import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

class DetailCard extends Component {
  render() {
    const { title, image, description, url } = this.props;

    return (
      <Card className="max-w-sm gap-2 rounded overflow-hidden shadow-lg bg-white m-4">
        <CardHeader className="relative h-56">
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
            {title}
          </Typography>
          <Typography color="gray" className="mb-4">
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="blue"
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default DetailCard;
