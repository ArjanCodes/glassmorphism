import { Grow, makeStyles, Paper, PaperProps, Theme } from "@material-ui/core";
import clsx from "clsx";
import color from "color";

const useStyles = (c: string) =>
  makeStyles((theme: Theme) => ({
    glass: {
      borderLeft: `solid 1px ${color(c).alpha(0.5).toString()}`,
      borderTop: `solid 1px ${color(c).alpha(1).toString()}`,
      backgroundColor: color(c).alpha(0.5).toString(),
      backgroundImage: `linear-gradient(to bottom right, ${color(c)
        .alpha(0.7)
        .toString()}, ${color(c).alpha(0).toString()})`,
      backdropFilter: "blur(7px)",
    },
    glassRounded: {
      borderRadius: theme.spacing(2),
    },
  }));

export interface GlassCardProps extends PaperProps {
  color?: string;
}

function GlassCard(props: GlassCardProps) {
  const { color = "#ffffff", className, ...rest } = props;
  const classes = useStyles(color)();

  return (
    <Grow in >
    <Paper
      className={clsx(classes.glass, className)}
      classes={{
        rounded: classes.glassRounded,
      }}
      elevation={20}
      {...rest}
    />
    </Grow>
  );
}

export default GlassCard;
