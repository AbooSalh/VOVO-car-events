import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faPlusCircle,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
export const navLinks = [
  {
    href: "/events",
    label: "Car Events",
    icon: <FontAwesomeIcon icon={faCar} />,
  },
  {
    href: "/add-event",
    label: "Add Event",
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },
  {
    href: "/more",
    label: "More",
    icon: <FontAwesomeIcon icon={faEllipsisH} />,
  },
];
