![image](https://github.com/user-attachments/assets/3e686dbf-20c8-49e6-b7fb-bf1fe3355af0)


## Component library 
- Our project utilizes [Shadn UI](https://ui.shadcn.com/)  as the foundation for our component library, providing a robust and flexible base for developing responsive, cohesive user interfaces. Shadn UI’s component-centric architecture enables streamlined customization and enhances maintainability, ensuring that our UI aligns with modern design standards and delivers a seamless user experience. Leveraging this library allows us to efficiently integrate design consistency and functionality across our application, meeting both current and future interface needs with ease.

## Testing 
- We are employing [Jest](https://jestjs.io/)  as our primary testing framework, chosen for its robust capabilities in handling unit, integration, and snapshot testing. Jest’s efficient and intuitive structure allows us to maintain high-quality code through reliable test coverage, facilitating early bug detection and ensuring that each component performs as expected. By leveraging Jest’s powerful mocking and assertion libraries, we are able to streamline test creation and execution, which ultimately supports the stability and scalability of our application.

## Documentation
- We are utilizing [Storybook](https://storybook.js.org/) as our component development and documentation tool, chosen for its ability to create an isolated environment for building, testing, and refining UI components. Storybook enables us to visualize components in different states and configurations, fostering a modular approach that simplifies development and enhances component reusability. By providing a dedicated space for thorough UI exploration and documentation, Storybook supports our commitment to a consistent and polished user interface, while streamlining collaboration across design and development teams.

## Design methodology
- We are also implementing the [ Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/), a structured approach that organizes components into hierarchical layers, from the simplest elements to complex interfaces. This methodology enables us to build UI components with a high degree of reusability and scalability, fostering consistency across our application. By decomposing interfaces into atoms, molecules, organisms, templates, and pages, we achieve a cohesive design system that adapts seamlessly to evolving requirements while maintaining clarity in both structure and styling.


---

## Commands

| Command                     | Description                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `npm run test`          | Run jest testing framework                      |
| `npm run storybook`      | Initialize storybook component library                                |
| `npm run dev`        | Start next js server                               |


---

## Development 
- Every component inherits from [Shadn UI](https://ui.shadcn.com/)
- Components should be generic and re-usable
- Every component should have `types` and `enums`

## Naming
- We follow industry standard naming `datacomm-component.tsx`

## Component workflow 
- Every componet should have a test attached and storybook entry
  - `datacomm-component.tsx`
  - `datacomm-component.test.tsx`
  - `datacomm-component.stories.tsx`
 ---

## Github worfklow 
- Create issue with easy to read title and clear description for the task
- When crearing PR:
   - title should follow this standard naming: `#number - title` e.g. `#01 - Created datacomm component`
   - description should describe the tasks and key word `closes` with issue number
   - commit message should be simple and descriptive and follow this naming `#number - added colours`
   - Squash and merging after PR has been approved 




