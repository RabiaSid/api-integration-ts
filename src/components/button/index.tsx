import { Button } from "@mui/material";

type ButtonProps = {
  variant: any;
  label: string;
  color: any;
  onClick?: (...args: any[]) => any;
};

export default function AppButton(props: ButtonProps) {
  const { variant, label, color, onClick } = props;

  return (
    <>
      <Button variant={variant} color={color} onClick={onClick} fullWidth>
        {label}
      </Button>
    </>
  );
}
