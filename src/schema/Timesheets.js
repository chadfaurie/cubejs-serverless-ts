const {
  authInfo: { stage, user, ...props }
} = COMPILE_CONTEXT;

cube(`Timesheets`, {
  sql: `SELECT * FROM ${stage}_timesheet`,

  joins: {},

  segments: {
    mine: {
      sql: `${CUBE}."createdBy" = '${user.sub}'`,
      title: `Created By Me`
    },
    my_team: {
      sql: `${CUBE}."createdBy" = '${user.team}'`,
      title: `Created By My Team`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [createdby, updatedby, createdat, updatedat, date]
    },
    sum: {
      type: `sum`,
      sql: `duration_hrs`,
      title: `Sum of Hours`,
      drillMembers: [createdby, updatedby, createdat, updatedat, date]
    },
    sum_minutes: {
      type: `sum`,
      sql: `duration`,
      title: `Sum of Minutes`,
      drillMembers: [createdby, updatedby, createdat, updatedat, date]
    }
  },

  dimensions: {
    id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true
    },

    createdby: {
      sql: `${CUBE}."createdBy"`,
      type: `string`,
      title: `Created By`,
      shown: false
    },
    updatedby: {
      sql: `${CUBE}."updatedBy"`,
      type: `string`,
      title: `Updated By`,
      shown: false
    },
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`,
      title: `Created At`
    },
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`,
      title: `Updated At`
    },

    organization: {
      sql: `organization`,
      type: `string`,
      shown: false
    },
    user_id: {
      sql: `${CUBE}."user"."id"`,
      type: `string`,
      title: "User Id",
      shown: false
    },

    duration: {
      sql: `duration`,
      type: `number`,
      title: `Duration Minutes`
    },

    durationHrs: {
      sql: `duration_hrs`,
      type: `number`,
      title: `Duration Hours`
    },

    invoiced: {
      sql: `invoiced`,
      type: `string`
    },

    notes: {
      sql: `notes`,
      type: `string`
    },

    task: {
      sql: `task`,
      type: `string`
    },

    From: {
      sql: `${CUBE}."@from"`,
      type: `time`,
      title: `From`
    },

    To: {
      sql: `${CUBE}."@to"`,
      type: `time`,
      title: `To`
    },

    date: {
      sql: `date`,
      type: `time`
    },

    project_name: {
      sql: `${CUBE}."project"."name"`,
      type: `string`,
      title: "Project Name"
    },

    client_name: {
      sql: `${CUBE}."client"."name"`,
      type: `string`,
      title: "Client Name"
    },

    user_team: {
      sql: `${CUBE}."user"."team"`,
      type: `string`,
      title: "User Team"
    },

    user_email: {
      sql: `${CUBE}."user"."email"`,
      type: `string`,
      title: "User Email"
    },

    issue: {
      sql: `${CUBE}."issue"."key"`,
      type: `string`,
      title: "Issue"
    }
  }
});
