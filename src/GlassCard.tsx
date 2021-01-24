import { makeStyles, Paper, PaperProps, Theme } from "@material-ui/core";
import color from "color";
import { ReactNode } from "react";

const useStyles = (c: string) =>
  makeStyles((theme: Theme) => ({
    glass: {
      borderLeft: `solid 1px ${color(c).fade(0.4).toString()}`,
      borderTop: `solid 1px ${color(c).fade(0.9).toString()}`,
      backgroundColor: "transparent",
      backgroundImage: `linear-gradient(to bottom right, ${color(c)
        .fade(0.2)
        .toString()}, ${color(c).fade(1).toString()})`,
      backdropFilter: "blur(7px)",
    },
    glassRounded: {
      borderRadius: theme.spacing(2),
    },
  }));

export interface GlassCardProps extends PaperProps {
  children?: ReactNode;
  color?: string;
}

function GlassCard(props: GlassCardProps) {
  const { color = "#ffffff", ...rest } = props;
  const classes = useStyles(color)();

  return (
    <Paper
      className={classes.glass}
      classes={{
        rounded: classes.glassRounded,
      }}
      elevation={20}
      {...rest}
    />
  );
}

export default GlassCard;
