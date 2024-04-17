import { Check, X } from "lucide-react";

interface ProgressBarProps {
  show: boolean;
  error: boolean;
}

export default function ProgressBar({ show, error }: ProgressBarProps) {
  return (
    <div
      className={`${!show ? "max-h-0" : "max-h-28 pt-4"} mx-auto max-w-sm overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div className="mb-2 flex items-center justify-between bg-background">
        <div
          className={`flex items-center justify-center rounded-full text-white ${!error ? "bg-teal-500" : "bg-ring"} px-2 py-1 text-xs font-semibold uppercase`}
        >
          {!error ? "Email sent!" : "Error sending email. Please try again."}
          <div>{!error ? <Check /> : <X />}</div>
        </div>
      </div>
      <div className="flex h-2 rounded-full bg-gray-500">
        <div
          className={`rounded-full ${!error ? "bg-teal-500" : "bg-ring"} ${!show ? "w-full" : "w-0"} transition-[width] duration-[5000ms] ease-linear`}
        ></div>
      </div>
    </div>
  );
}
