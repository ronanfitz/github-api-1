/* eslint-disable no-undef, no-unused-expressions, no-debugger */
const { expect } = require('chai');
const PullRequest = require('../src/models/PullRequest');

describe('PullRequest model', () => {
  const pullRequest = new PullRequest(
    {
      url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4',
      id: 133820061,
      html_url: 'https://github.com/michaelmurray6298/react-inbox/pull/4',
      diff_url: 'https://github.com/michaelmurray6298/react-inbox/pull/4.diff',
      patch_url: 'https://github.com/michaelmurray6298/react-inbox/pull/4.patch',
      issue_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/4',
      number: 4,
      state: 'open',
      locked: false,
      title: 'Redux refactor',
      user: {
        login: 'michaelmurray6298',
        id: 24865792,
        avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/michaelmurray6298',
        html_url: 'https://github.com/michaelmurray6298',
        followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
        following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
        gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
        organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
        repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
        events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
        received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
        type: 'User',
        site_admin: false,
      },
      body: '',
      created_at: '2017-08-02T22:09:22Z',
      updated_at: '2017-08-02T22:09:43Z',
      closed_at: null,
      merged_at: null,
      merge_commit_sha: 'bcaffe28b70421e767b3f20e4c3178283f373cb1',
      assignee: null,
      assignees: [

      ],
      requested_reviewers: [

      ],
      milestone: {
        url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones/1',
        html_url: 'https://github.com/michaelmurray6298/react-inbox/milestone/1',
        labels_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones/1/labels',
        id: 2677830,
        number: 1,
        title: 'Test',
        description: '',
        creator: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
          following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        open_issues: 1,
        closed_issues: 1,
        state: 'open',
        created_at: '2017-08-02T22:09:34Z',
        updated_at: '2017-08-02T22:13:26Z',
        due_on: '2017-08-20T07:00:00Z',
        closed_at: null,
      },
      commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4/commits',
      review_comments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4/comments',
      review_comment_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/comments{/number}',
      comments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/4/comments',
      statuses_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/f201c18eb4b44c24c0d8f9590e2fb3ada2f4d73f',
      head: {
        label: 'michaelmurray6298:redux-refactor',
        ref: 'redux-refactor',
        sha: 'f201c18eb4b44c24c0d8f9590e2fb3ada2f4d73f',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
          following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        repo: {
          id: 97292532,
          name: 'react-inbox',
          full_name: 'michaelmurray6298/react-inbox',
          owner: {
            login: 'michaelmurray6298',
            id: 24865792,
            avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/michaelmurray6298',
            html_url: 'https://github.com/michaelmurray6298',
            followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
            following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
            gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
            organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
            repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
            events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
            received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
            type: 'User',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/michaelmurray6298/react-inbox',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/michaelmurray6298/react-inbox',
          forks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/forks',
          keys_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/keys{/key_id}',
          collaborators_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/teams',
          hooks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/hooks',
          issue_events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/events{/number}',
          events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/events',
          assignees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/assignees{/user}',
          branches_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/branches{/branch}',
          tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/tags',
          blobs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/languages',
          stargazers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/stargazers',
          contributors_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contributors',
          subscribers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscribers',
          subscription_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscription',
          commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/commits{/sha}',
          git_commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/commits{/sha}',
          comments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/comments{/number}',
          issue_comment_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/comments{/number}',
          contents_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contents/{+path}',
          compare_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/merges',
          archive_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/downloads',
          issues_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues{/number}',
          pulls_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls{/number}',
          milestones_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones{/number}',
          notifications_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/labels{/name}',
          releases_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/releases{/id}',
          deployments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/deployments',
          created_at: '2017-07-15T04:40:38Z',
          updated_at: '2017-07-17T23:57:59Z',
          pushed_at: '2017-08-02T22:09:22Z',
          git_url: 'git://github.com/michaelmurray6298/react-inbox.git',
          ssh_url: 'git@github.com:michaelmurray6298/react-inbox.git',
          clone_url: 'https://github.com/michaelmurray6298/react-inbox.git',
          svn_url: 'https://github.com/michaelmurray6298/react-inbox',
          homepage: null,
          size: 229,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          open_issues_count: 2,
          forks: 0,
          open_issues: 2,
          watchers: 0,
          default_branch: 'master',
        },
      },
      base: {
        label: 'michaelmurray6298:master',
        ref: 'master',
        sha: 'd4d1dc5992fe50d0d292be175505f4ab5e187f2c',
        user: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
          following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        repo: {
          id: 97292532,
          name: 'react-inbox',
          full_name: 'michaelmurray6298/react-inbox',
          owner: {
            login: 'michaelmurray6298',
            id: 24865792,
            avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/michaelmurray6298',
            html_url: 'https://github.com/michaelmurray6298',
            followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
            following_url: 'https://api.github.com/users/michaelmurray6298/following{/other_user}',
            gists_url: 'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/michaelmurray6298/subscriptions',
            organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
            repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
            events_url: 'https://api.github.com/users/michaelmurray6298/events{/privacy}',
            received_events_url: 'https://api.github.com/users/michaelmurray6298/received_events',
            type: 'User',
            site_admin: false,
          },
          private: false,
          html_url: 'https://github.com/michaelmurray6298/react-inbox',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/michaelmurray6298/react-inbox',
          forks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/forks',
          keys_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/keys{/key_id}',
          collaborators_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/teams',
          hooks_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/hooks',
          issue_events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/events{/number}',
          events_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/events',
          assignees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/assignees{/user}',
          branches_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/branches{/branch}',
          tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/tags',
          blobs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/languages',
          stargazers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/stargazers',
          contributors_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contributors',
          subscribers_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscribers',
          subscription_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/subscription',
          commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/commits{/sha}',
          git_commits_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/git/commits{/sha}',
          comments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/comments{/number}',
          issue_comment_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/comments{/number}',
          contents_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/contents/{+path}',
          compare_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/merges',
          archive_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/downloads',
          issues_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues{/number}',
          pulls_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls{/number}',
          milestones_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones{/number}',
          notifications_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/labels{/name}',
          releases_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/releases{/id}',
          deployments_url: 'https://api.github.com/repos/michaelmurray6298/react-inbox/deployments',
          created_at: '2017-07-15T04:40:38Z',
          updated_at: '2017-07-17T23:57:59Z',
          pushed_at: '2017-08-02T22:09:22Z',
          git_url: 'git://github.com/michaelmurray6298/react-inbox.git',
          ssh_url: 'git@github.com:michaelmurray6298/react-inbox.git',
          clone_url: 'https://github.com/michaelmurray6298/react-inbox.git',
          svn_url: 'https://github.com/michaelmurray6298/react-inbox',
          homepage: null,
          size: 229,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          open_issues_count: 2,
          forks: 0,
          open_issues: 2,
          watchers: 0,
          default_branch: 'master',
        },
      },
      _links: {
        self: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4',
        },
        html: {
          href: 'https://github.com/michaelmurray6298/react-inbox/pull/4',
        },
        issue: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/4',
        },
        comments: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/4/comments',
        },
        review_comments: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4/comments',
        },
        review_comment: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/comments{/number}',
        },
        commits: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls/4/commits',
        },
        statuses: {
          href: 'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/f201c18eb4b44c24c0d8f9590e2fb3ada2f4d73f',
        },
      },
      merged: false,
      mergeable: true,
      rebaseable: true,
      mergeable_state: 'clean',
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: false,
      commits: 4,
      additions: 1354,
      deletions: 578,
      changed_files: 18,
    },
  );

  it('accepts id, number, title, submitted by, created at, and mergeable as passed in arguments', () => {
    expect(pullRequest.id).to.equal(133820061);
    expect(pullRequest.number).to.equal(4);
    expect(pullRequest.title).to.equal('Redux refactor');
    debugger;
    expect(pullRequest.submittedBy).to.equal('michaelmurray6298');
    expect(pullRequest.createdAt).to.equal('2017-08-02T22:09:22Z');
    expect(pullRequest.mergeable).to.equal(true);
  });
  after((done) => {
    done();
  });
});
