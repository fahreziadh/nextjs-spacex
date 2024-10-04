import { gql } from "@/__generated__";

export const GET_ROCKET = gql(`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      active
      boosters
      company
      cost_per_launch
      country
      description
      diameter {
        feet
        meters
      }
      engines {
        engine_loss_max
        layout
        number
        propellant_1
        propellant_2
        thrust_sea_level {
          kN
          lbf
        }
        thrust_to_weight
        thrust_vacuum {
          kN
          lbf
        }
        type
        version
      }
      first_flight
  
      height {
        feet
        meters
      }
      id
      landing_legs {
        material
        number
      }
      mass {
        kg
        lb
      }
      name
      payload_weights {
        id
        kg
        lb
        name
      }
  
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`);
