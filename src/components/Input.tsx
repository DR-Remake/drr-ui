import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "../lib/utils";

export function Input<T extends FieldValues>({
  name,
  label,
  className,
  ...props
}: { name: Path<T>; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="flex w-full flex-col gap-1.5">
          <label htmlFor={name} className={cn({ "text-red-500": error })}>
            {label}
          </label>
          <input
            id={name}
            className={cn(
              "w-full rounded-md border-2 border-gray-300 px-4 py-2 text-black focus:outline-none",

              {
                "border-red-500": error
              },
              className
            )}
            {...field}
            {...props}
          />
          <span className={cn("text-xs", { "text-red-500": error })}>{error && error.message}</span>
        </div>
      )}
    />
  );
}
