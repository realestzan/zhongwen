import { Terminal } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

interface NotificationProps {
  isOn: boolean;
  title: string;
  description: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export default function Notification({ isOn, title, description, Icon = Terminal }: NotificationProps) {
  return (
    <Alert className={` ${isOn ? 'block' : 'hidden'}` }>
      <Icon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}