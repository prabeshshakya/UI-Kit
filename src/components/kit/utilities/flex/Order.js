import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const Order = () => {
	const code = `
<div class="d-flex flex-nowrap">
	<div class="order-3">First flex item</div>
	<div class="order-2">Second flex item</div>
	<div class="order-1">Third flex item</div>
</div>
    `;

	const OrderMixins = `
	@each $types, $map in $flex-utilities {
        @if ($types == order) {
          @for $i from 1 through $grid-count {
            @if $breakpoint == 0 {
              .#{$types}-#{$i} {
                #{$types}: #{$i};
              }
            } @else {
              .#{$types}-#{$i}-#{$name} {
                #{$types}: #{$i};
              }
            }
          }
        }
        @each $type, $properties in $map {
          @if $breakpoint == 0 {
            .#{$type} {
              #{$types}: $properties;
            }
          } @else {
            .#{$type}-#{$name} {
              #{$types}: $properties;
            }
          }
        }
      }
	`;
	return (
		<>
			<div className="content-block">
				<h2>Order</h2>
				<p className="page__brief">We can use order utilities on flexbox items to change the visual order of specific flex items. We only provide options for making an item first or last and a reset to use the DOM order. As order takes any integer value from 0 to the number of grid counts. The default value of the order will be 0.</p>

				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>
						<TabPanel>
							<div className="preview-container">
								<div className="example-row">
									<div class="d-flex flex-nowrap">
										<div class="order-3 eg-box">First flex item</div>
										<div class="order-2 eg-box">Second flex item</div>
										<div class="order-1 eg-box">Third flex item</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="preview-container">
								<div className="d-flex">
									<div className="code-preview">
										<Syntax language="html">{code}</Syntax>
									</div>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>

				<h4>Available Classes</h4>

				<table className="table mb-4x">
					<thead>
						<tr>
							<th scope="col">
								xs
								<br />
								<span>&lt;576px</span>
							</th>
							<th scope="col">
								sm
								<br />
								<span>≥576px</span>
							</th>
							<th scope="col">
								md
								<br />
								<span>≥768px</span>
							</th>
							<th scope="col">
								lg
								<br />
								<span>≥992px</span>
							</th>
							<th scope="col">
								xl
								<br />
								<span>≥1200px</span>
							</th>
							<th scope="col">
								xxl
								<br />
								<span>≥1400px</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>order-1</code>
							</td>
							<td>
								<code>order-1-sm</code>
							</td>
							<td>
								<code>order-1-md</code>
							</td>
							<td>
								<code>order-1-lg</code>
							</td>
							<td>
								<code>order-1-xl</code>
							</td>
							<td>
								<code>order-1-xxl</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>order-2</code>
							</td>
							<td>
								<code>order-2-sm</code>
							</td>
							<td>
								<code>order-2-md</code>
							</td>
							<td>
								<code>order-2-lg</code>
							</td>
							<td>
								<code>order-2-xl</code>
							</td>
							<td>
								<code>order-2-xxl</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>order-12</code>
							</td>
							<td>
								<code>order-12-sm</code>
							</td>
							<td>
								<code>order-12-md</code>
							</td>
							<td>
								<code>order-12-lg</code>
							</td>
							<td>
								<code>order-12-xl</code>
							</td>
							<td>
								<code>order-12-xxl</code>
							</td>
						</tr>
					</tbody>
				</table>

				<blockquote className="docs-info">
					<strong>Note:</strong> The count upto 12 is generated from <code> $grid-count</code>
				</blockquote>
			</div>

			<div className="content-block">
				<h3>Mixins</h3>
				<p>
					The mixins for <code>Order</code> is located at <code>utilities/_flex-utils.scss</code>
				</p>

				<div className="code-preview">
					<Syntax language="scss">{OrderMixins}</Syntax>
				</div>
			</div>
		</>
	);
};
export default Order;
