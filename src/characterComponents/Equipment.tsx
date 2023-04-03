import {
  Item,
  Modifier,
  ItemTypes,
  Equipment,
  ModifierTypes,
  Stat,
  Skill,
  Ability,
} from "../Structs";
import React, { useEffect } from "react";
import "../Styles.css";

export const EquipmentItem = (props: any) => {
  let item: Item = props.item;
  let equipped: boolean = props.equipped.valueOf();
  let modifier: Modifier = item.modifier;
  let type: ItemTypes = item.type;
  let name: string = item.name;
  let description: string = item.description;
  let weight: number = item.weight;
  let value: number = item.value;
  let quantity: number = item.quantity;
  let notes: string = item.notes;

  const [equippedState, setEquippedState] = React.useState(equipped);
  // useEffect(() => {
  //   setEquippedState(equipped);
  // }, [equipped]);

  return (
    <div className="equipment-item">
      <div className="equipment-item-header">
        <text id="name">{name}</text>
      </div>
      <div className="equipment-item-body">
        <div className="equipment-item-equipped">
          <input
            type="checkbox"
            name="equipped"
            onClick={() => {
              item.equipped = !equippedState;
              setEquippedState(!equippedState);
              props.equipAction(item);
            }}
            defaultChecked={equippedState}
          />
        </div>
        <div className="equipment-item-type">
          <label htmlFor="type" className="equipment-item-label">
            Type
          </label>
          <text id="type">{type}</text>
        </div>
        <div className="equipment-item-description">
          <label htmlFor="description" className="equipment-item-label">
            Description
          </label>
          <text>{description}</text>
        </div>
        <div className="equipment-item-modifier">
          <label htmlFor="modifier" className="equipment-item-label">
            Modifier
          </label>
          <text>{modifier.type}</text>
          <text>{modifier.value}</text>
        </div>
        <div className="equipment-item-weight">
          <label htmlFor="weight" className="equipment-item-label">
            Weight
          </label>
          <text>{weight}</text>
        </div>
        <div className="equipment-item-quantity">
          <label htmlFor="quantity" className="equipment-item-label">
            Quantity
          </label>
          <text>{quantity}</text>
        </div>
        <div className="equipment-item-notes">
          <label htmlFor="notes" className="equipment-item-label">
            Notes
          </label>
          <text>{notes}</text>
        </div>
      </div>
    </div>
  );
};

//Upgrade this to a class component for CharacterEquipment
export default class CharacterEquipment extends React.Component<
  any,
  Equipment
> {
  constructor(props: Equipment) {
    super(props);
    this.state = {
      items: props.items,
      weight: props.weight,
      value: props.value,
      modifiers: [],
      money: props.money,
    };
  }

  totalWeight: number = 0;

  calculateWeight = () => {
    this.state.items.forEach((item: Item) => {
      if (item.equipped) this.totalWeight += item.weight;
      // else this.totalWeight -= item.weight;
    });
    return this.totalWeight;
  };

  getModifiers = () => {
    this.state.items.forEach((item: Item) => {
      if (item.equipped) this.applyModifier(item);
    });
    return this.state.modifiers;
  };

  applyModifier = (item: Item) => {
    let modifier: any = item.modifier;
    let currentModifiers: any = this.state.modifiers ?? [];
    modifier.item = item.name;

    if (item.equipped && !currentModifiers.includes(modifier)) {
      currentModifiers.push(modifier);
    } else if (!item.equipped && currentModifiers.includes(modifier)) {
      currentModifiers.forEach((mod: any, index: number) => {
        if (mod === modifier) currentModifiers.splice(index, 1);
      });
    }
  };

  equipAction = (item: Item) => {
    let equipped: boolean = item.equipped.valueOf();
    let name: string = item.name;
    this.applyModifier(item);
    //Remove weight if item is unequipped
    if (!equipped) this.totalWeight -= item.weight;
    else this.totalWeight += item.weight;
    this.dispatchState();
  };

  componentWillMount(): void {
    this.calculateWeight();
    this.getModifiers();
  }

  componentDidUpdate(
    prevProps: Readonly<Equipment>,
    prevState: Readonly<Equipment>,
    snapshot?: any
  ): void {}

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }

  //Pass state to parent component
  dispatchState = () => {
    this.props.updateEquipment(this.state);
  };

  render() {
    return (
      <div className="equipment">
        <div className="equipment-header">
          <text>Equipment</text>
          <div className="equipment-modifiers">
            <text>Modifiers: </text>
            {this.getModifiers()?.map((modifier: Modifier) => {
              return (
                <div className="equipment-modifier">
                  <text className="equipment-modifier-label">
                    {modifier.type +
                      `[${modifier.description && modifier.description}]` +
                      ": " ?? ""}
                  </text>
                  <text className="equipment-modifier-value">
                    {typeof modifier.value === "string"
                      ? modifier.value
                      : typeof modifier.value === "number" && modifier.value > 0
                      ? `+${modifier.value}`
                      : modifier.value}
                  </text>
                </div>
              );
            })}
          </div>
          <div className="equipment-weight">
            <text>Weight: </text>
            <text className="equipment-weight-value">{this.totalWeight}</text>
          </div>
          <div className="equipment-money">
            <text>Money: </text>
            <div className="equipment-money-currency">
              <text>CP: {this.state.money?.cp ?? 0}</text>
            </div>
            <div className="equipment-money-currency">
              <text>SP: {this.state.money?.sp ?? 0}</text>
            </div>
            <div className="equipment-money-currency">
              <text>EP: {this.state.money?.ep ?? 0}</text>
            </div>
            <div className="equipment-money-currency">
              <text>GP: {this.state.money?.gp ?? 0}</text>
            </div>
            <div className="equipment-money-currency">
              <text>PP: {this.state.money?.pp ?? 0}</text>
            </div>
          </div>
        </div>
        <div className="equipment-body">
          {this.state.items?.map((item: Item) => {
            return (
              <EquipmentItem
                key={item.name}
                item={item}
                equipAction={this.equipAction}
                equipped={item.equipped}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
