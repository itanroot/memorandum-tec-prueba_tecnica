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
  actionButton?: any
  footer?: any
  description?: string
}
export default function CardBackground({ color, img, title, actionButton, footer, description }: Props) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3 absolute  m-0 w-full ">
        <Button
          size="lg" fullWidth={true}
          onClick={actionButton} >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}