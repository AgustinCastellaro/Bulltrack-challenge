import { MOCK_DATA } from "@/app/constants/mocks";
import { DataItem } from "@/app/types/data";

export function getMockData(): Promise<DataItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 500);
  });
}