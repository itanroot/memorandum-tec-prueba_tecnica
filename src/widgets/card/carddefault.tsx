import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
interface Props {
  color?: any
  img?: any
  title?: any
  handleClick?: any
  footer?: any
  description?: string
}
export default function CardDefault({ color, img, title, handleClick, footer, description }: Props) {
  
  return (
    <Card className="mt-6 justify-between bg-cyan-500 hover:bg-cyan-300" >
      <CardHeader color="blue-gray" className="relative h-50" >
        {img}
      </CardHeader>
      < CardBody >
        <Typography variant="h5" color="blue-gray" className="mb-2 cursor-pointer" onClick={handleClick}>
          {title}
        </Typography>
        {description && (
          <Typography>
            {description}
          </Typography>
        )}
      </CardBody>
      < CardFooter className="pt-0" >
        <Button onClick={handleClick}>Read More </Button>
      </CardFooter>
    </Card>
  );
}