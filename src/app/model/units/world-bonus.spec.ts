import { EventEmitter } from "@angular/core";
import { Game } from "../game";
import { Workers } from "./workers";
import { WorldBonus } from "./world-bonus";

describe("WorldBonus", () => {
  it("should create an instance", () => {
    const game = new Game(
      new EventEmitter<number>(),
      new EventEmitter<string>()
    );
    expect(new WorldBonus()).toBeTruthy();
  });
});