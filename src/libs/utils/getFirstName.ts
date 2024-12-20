
export function getFirstName(fullName: string | undefined | null ) {
    
    return fullName?.split(' ')[0] ?? "Guest";
  }
  