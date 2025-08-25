import type { FieldValues, UseFormSetError, Path } from "react-hook-form";

export function mapServerErrors<T extends FieldValues>(
    setError: UseFormSetError<T>,
    errorsFormServer: Record<string, string>
) {
    Object.keys(errorsFormServer).forEach((field) => {
        setError(field as Path<T>, {
            type: "server",
            message: errorsFormServer[field]
        })
    })

    return errorsFormServer;
}
