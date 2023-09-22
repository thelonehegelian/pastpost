export default function estimateFutureBlockNumber(
  currentBlockNumber: number,
  futureDate: Date,
): number {
  const averageBlockTimeSeconds = 30;
  const currentDate = new Date();

  const timeDifferenceSeconds = (futureDate.getTime() - currentDate.getTime()) / 1000;

  const blocksMined = Math.floor(timeDifferenceSeconds / averageBlockTimeSeconds);

  const futureBlockNumber = currentBlockNumber + blocksMined;

  return futureBlockNumber;
}
