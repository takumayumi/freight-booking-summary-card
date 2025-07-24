export type SummaryCardProps = {
  origin: string;
  destination: string;
  vehicleType: string;
  estimatedPrice: string;
  onEdit?: () => void;
  onConfirm?: () => void;
};
