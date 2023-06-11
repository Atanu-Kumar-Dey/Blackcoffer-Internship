import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card className="min-w-[200px]">
      <CardHeader
        variant="gradient"
        color={"green"}
        className="absolute -mt-4 grid h-16 w-16 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          Total Money
        </Typography>
        <Typography variant="h4" color="blue-gray">
          value
        </Typography>
      </CardBody>

      <CardFooter className="border-t border-blue-gray-50 p-4">
        footer
      </CardFooter>
    </Card>
  );
}

export default StatisticsCard;
