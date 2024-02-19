# CipherPulse

## Introduction

The 'CipherPulse' project provides the user with information on various cryptocurrencies, allowing them to view a full list and details of each.

## General Description of the Project

The project consists of three main elements: a list of cryptocurrencies, a list of exchanges and pages dedicated to each cryptocurrency or exchange. The user can view general information about each cryptocurrency and see a chart of the value.

## Functionality

### List of cryptocurrencies

On the main page of the project, the user can view the list of cryptocurrencies. The information is dynamically downloaded from an external API, ensuring that the data is up-to-date.

### Cryptocurrency page

After selecting a specific cryptocurrency from the list, the user will be taken to a dedicated page. There he will find basic data about the cryptocurrency, such as the symbol, the current price or the number of available units.

### Cryptocurrency Value Chart

On the cryptocurrency page, an interactive graph is available, showing the history of the change in the value of the cryptocurrency over a selected period of time.

## Implementation

### Technologies

The project was implemented using technologies:

- Frontend: React TypeScript, SCSS
- Cryptocurrency API communication: Axios

### Downloading data from the API

Cryptocurrency data is downloaded from the public API to keep the information up to date.

### Displaying the Cryptocurrency List

The list of cryptocurrencies is generated dynamically based on the data downloaded from the API. The user can filter and sort cryptocurrencies according to various criteria.

### Cryptocurrency page

The cryptocurrency page contains basic information about the selected entity, presented in an easy-to-read format. The data is presented in the form of components, making it easy to expand and modify the page.

### Value chart

A suitable framework has been used to generate graphs, enabling the interactive presentation of historical data on the value of the cryptocurrency.

## User interface

The interface was designed in an intuitive and responsive way, adapted to different devices.

## User Manual

1 **Home page:**.

- Browse the list of cryptocurrencies.
- Click on the name of the cryptocurrency to go to its dedicated page.

2. **Cryptocurrency page:**.
   - Find basic information about the selected cryptocurrency.
   - Check out the interactive graph of values over different time periods.

The project is open for development, so any suggestion for an improvement or new feature is welcome.
