import { Document, Model } from "mongoose";

interface MonthData {
  month: string;
  count: number;
}

export async function generatorLast12MonthsData<T extends Document>(
  model: Model<T>
): Promise<{ last12Months: MonthData[] }> {
  const last12Months: MonthData[] = [];
  const currentData = new Date();
  currentData.setDate(currentData.getDate() + 1);

  for (let i = 11; i >= 0; i--) {
    const endData = new Date(
      currentData.getFullYear(),
      currentData.getMonth(),
      currentData.getDate() - i * 28
    );
    const startData = new Date(
      endData.getFullYear(),
      endData.getMonth(),
      endData.getDate() - 28
    );

    const monthYear = endData.toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const count = await model.countDocuments({
      createdAt: {
        $gte: startData,
        $lt: endData,
      },
    });
    last12Months.push({ month: monthYear, count });
  }

  return { last12Months };
}
