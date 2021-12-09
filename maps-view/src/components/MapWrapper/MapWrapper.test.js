import { render } from '@testing-library/react';

import MapWrapper from "./MapWrapper";


const mapComponent = <p>Test</p>

it("matches snapshot", () => {
  const { asFragment } = render(<MapWrapper mapComponent={mapComponent} />);

  expect(asFragment()).toMatchSnapshot();
});