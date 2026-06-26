/**
 * Formatter helpers — pure functions, no UI5 base class needed.
 */
export function getStatus(code: string): string {
    switch (code) {
        case "A": return "Available";
        case "D": return "Discontinued";
        case "O": return "Out of Stock";
        default:  return "";
    }
}

export function getStatusColor(code: string): string {
    switch (code) {
        case "A": return "Success";
        case "D": return "Error";
        case "O": return "Warning";
        default:  return "None";
    }
}
// ...getOrderTypeDescription below