import { test, expect } from '@playwright/test';

const mockLaunches = [
  {
    id: '1',
    mission_name: 'FalconSat',
    launch_date_utc: '2006-03-25T00:00:00Z',
    rocket: { rocket_name: 'Falcon 1' },
    links: { mission_patch: 'https://example.com/patch1.png', video_link: 'https://example.com/video1' },
  },
  {
    id: '2',
    mission_name: 'DemoSat',
    launch_date_utc: '2007-03-21T00:00:00Z',
    rocket: { rocket_name: 'Falcon 1' },
    links: { mission_patch: 'https://example.com/patch2.png', video_link: 'https://example.com/video2' },
  },
  {
    id: '3',
    mission_name: 'Trailblazer',
    launch_date_utc: '2008-08-03T00:00:00Z',
    rocket: { rocket_name: 'Falcon 1' },
    links: { mission_patch: 'https://example.com/patch3.png', video_link: 'https://example.com/video3' },
  },
  {
    id: '4',
    mission_name: 'RatSat',
    launch_date_utc: '2008-09-29T00:00:00Z',
    rocket: { rocket_name: 'Falcon 1' },
    links: { mission_patch: 'https://example.com/patch4.png', video_link: 'https://example.com/video4' },
  },
  {
    id: '5',
    mission_name: 'RazakSat',
    launch_date_utc: '2009-07-13T00:00:00Z',
    rocket: { rocket_name: 'Falcon 1' },
    links: { mission_patch: 'https://example.com/patch5.png', video_link: 'https://example.com/video5' },
  },
  {
    id: '6',
    mission_name: 'Falcon 9 Test Flight',
    launch_date_utc: '2010-06-05T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch6.png', video_link: 'https://example.com/video6' },
  },
  {
    id: '7',
    mission_name: 'COTS 1',
    launch_date_utc: '2010-12-08T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch7.png', video_link: 'https://example.com/video7' },
  },
  {
    id: '8',
    mission_name: 'COTS 2',
    launch_date_utc: '2012-05-22T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch8.png', video_link: 'https://example.com/video8' },
  },
  {
    id: '9',
    mission_name: 'CRS-1',
    launch_date_utc: '2012-10-08T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch9.png', video_link: 'https://example.com/video9' },
  },
  {
    id: '10',
    mission_name: 'CRS-2',
    launch_date_utc: '2013-03-02T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch10.png', video_link: 'https://example.com/video10' },
  },
  {
    id: '11',
    mission_name: 'CASSIOPE',
    launch_date_utc: '2013-09-29T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch11.png', video_link: 'https://example.com/video11' },
  },
  {
    id: '12',
    mission_name: 'SES-8',
    launch_date_utc: '2013-12-04T00:00:00Z',
    rocket: { rocket_name: 'Falcon 9' },
    links: { mission_patch: 'https://example.com/patch12.png', video_link: 'https://example.com/video12' },
  },
];

test('launches page displays launches correctly', async ({ page }) => {
  // Intercept the network request to the LaunchService for launch list
  await page.route('**/graphql', async (route) => {
    const request = route.request();
    const postData = request.postDataJSON();

    // Check if the request is for the launch list
    if (postData?.query.includes('GetLaunchList')) {
      // Mock response data
      const mockResponse = {
        data: {
          launches: mockLaunches,
        },
      };

      // Respond with the mock data
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    } else {
      // Pass through other requests
      await route.continue();
    }
  });

  // Navigate to the launches page
  await page.goto('http://localhost:3000/launches?page=1');

  // Check if the missions are rendered
  // TODO: Add a test for the pagination
});

test('launches page displays no launches found message', async ({ page }) => {
  // Intercept the network request to the LaunchService for launch list
  await page.route('**/graphql', async (route) => {
    const request = route.request();
    const postData = request.postDataJSON();

    // Check if the request is for the launch list
    if (postData?.query.includes('GetLaunchList')) {
      // Mock response data for no launches
      const mockResponse = {
        data: {
          launches: [],
        },
      };

      // Respond with the mock data
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    } else {
      // Pass through other requests
      await route.continue();
    }
  });

  // Intercept the network request to the LaunchService for total launches
  await page.route('**/graphql', async (route) => {
    const request = route.request();
    const postData = request.postDataJSON();

    // Check if the request is for the total launches
    if (postData?.query.includes('GetLaunchTotal')) {
      // Mock response data
      const mockResponse = {
        data: {
          launches: [],
        },
      };

      // Respond with the mock data
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    } else {
      // Pass through other requests
      await route.continue();
    }
  });

  // Navigate to the launches page
  await page.goto('http://localhost:3000/launches?page=20');

  // Check if the no launches message is displayed
  await expect(page.locator('text=No launches found')).toBeVisible();
});