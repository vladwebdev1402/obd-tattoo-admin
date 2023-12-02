export const StringIsNumber = (prevValue: string, targetValue: string): string => {
    const re = /^\d+$/;
    let value = re.test(targetValue) ? targetValue : prevValue;
    value = targetValue ? value : "0";
    return value;
  };