export type PrismaSeed = {
  id?: number;
  name: string;
  executed: boolean;
  executed_at: Date;
};

export enum PrismaSeedEnum {
  Panel = "panel_seed",
}
