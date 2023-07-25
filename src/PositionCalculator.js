import { Box, InputAdornment, Typography } from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { useState } from "react";
import { InputComponent } from "./InputComponent";
import { LabelComponent } from "./LabelComponent";
import { useStyles } from "./useStyles";

export const PositionCalculator = () => {
  const classes = useStyles();

  const [accountBalance, setAccountBalance] = useState(5000);
  const [riskPercentage, setRiskPercentage] = useState(1);
  const [deductionsPerTrade, setDeductionsPerTrade] = useState(0);
  const [takeProfitPercentage, setTakeProfitPercentage] = useState(10);
  const [numLevels, setNumLevels] = useState(5);

  const calculatePositionSize = () => {
    const positionSize =
      (accountBalance * (riskPercentage / 100) -
        deductionsPerTrade * numLevels) /
      (takeProfitPercentage / 100);
    return Math.abs(positionSize.toFixed(2));
  };

  const calculatePotentialProfit = () => {
    const positionSize = calculatePositionSize();
    const potentialProfit = positionSize * (takeProfitPercentage / 100) * 0.5;
    return potentialProfit.toFixed(2);
  };

  const calculateAllocationWeights = () => {
    let weights = [];
    for (let i = 1; i <= numLevels; i++) {
      weights.push(i);
    }
    const sum = weights.reduce((a, b) => a + b, 0);
    return weights.map((weight) => weight / sum);
  };

  const calculatePositionSizes = () => {
    let positionSizes = [];
    const allocationWeights = calculateAllocationWeights();
    for (let i = 0; i < numLevels; i++) {
      let positionSize = calculatePositionSize() * allocationWeights[i];
      positionSizes.push(Math.abs(positionSize.toFixed(2)));
    }
    return positionSizes;
  };

  const calculateTotalRisk = () => {
    return (accountBalance * (riskPercentage / 100)).toFixed(2);
  };

  return (
    <Box className={classes.box}>
      <Typography variant="h4" className={classes.typography}>
        Position Size Calculator
      </Typography>

      <InputComponent
        Icon={AccountBalanceWalletIcon}
        label="Account Balance"
        value={accountBalance}
        setter={setAccountBalance}
        endAdornment={<InputAdornment position="end">$</InputAdornment>}
      />
      <InputComponent
        Icon={TrendingUpIcon}
        label="Risk Percentage"
        value={riskPercentage}
        setter={setRiskPercentage}
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
      <InputComponent
        Icon={ShowChartIcon}
        label="Take Profit Percentage"
        value={takeProfitPercentage}
        setter={setTakeProfitPercentage}
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
      <InputComponent
        Icon={FilterHdrIcon}
        label="Inverse Pyramid Levels"
        value={numLevels}
        setter={setNumLevels}
        endAdornment={<InputAdornment position="end">#</InputAdornment>}
      />
      <LabelComponent
        label="Total Position Size"
        value={calculatePositionSize()}
      />
      <LabelComponent
        label="Position Sizes per Level"
        value={calculatePositionSizes().join(", ")}
      />
      <LabelComponent
        label="Expected Profit when selling 50% at Take Profit"
        value={calculatePotentialProfit()}
      />
      <LabelComponent label="Total Risk" value={calculateTotalRisk()} />
    </Box>
  );
};
