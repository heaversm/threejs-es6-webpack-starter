import { dragFromTo, zoomInAt } from "../../utils";

describe("Three.js application", () => {
  const viewportWidth = 800;
  const viewportHeight = 600;

  beforeEach(() => {
    cy.visit("/");
    cy.viewport(viewportWidth, viewportHeight);
    // console.log(
    //   "test-environment-variable",
    //   Cypress.env("test-environment-variable")
    // );
    // console.log("browser", Cypress.browser);
  });

  context("WebGL canvas' container", () => {
    const selector = "[data-cy=canvas-container]";

    it("exists and it is visible", () => {
      cy.get(selector)
        .should("exist")
        .and("be.visible");
    });

    it("renders the view from the top after a mouse drag towards the bottom", () => {
      dragFromTo(selector, [100, 100], [100, 400]);
    });

    it("zooms in the cube in the center", () => {
      const x = viewportWidth / 2;
      const y = viewportHeight / 2;

      const mousemoveOptions = {
        clientX: x,
        clientY: y,
      };

      const wheelOptions = {
        clientX: x,
        clientY: y,
        deltaX: 0,
        deltaY: -53,
        deltaZ: 0,
        deltaMode: 0,
      };

      // TODO: I tried to assert that when mousemove-ing on the cube, the
      // tooltip becomes visible
      cy.get(selector)
        .trigger("mousemove", mousemoveOptions)
        .trigger("wheel", wheelOptions)
        .trigger("mousemove", mousemoveOptions);
    });
  });
});
