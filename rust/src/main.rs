fn strange_counter(time: u32) -> u32 {
    let mut stage: u32 = 0;

    loop {
        let time_boundary = 3 * u32::pow(2, stage + 1) - 2;

        if time_boundary > time {
            break;
        }

        stage = stage + 1;
    }

    let top_value = 3 * u32::pow(2, stage);
    let top_time = top_value - 2;

    let time_difference = time - top_time;
    let final_value = top_value - time_difference;

    final_value
}

fn missing_numbers(a: Vec<u32>, mut b: Vec<u32>) -> Vec<u32> {
    for num in &a {
        if let Some(index) = b.iter().position(|el| el == num) {
            b.remove(index);
        }
    }
    b.sort();
    let mut result: Vec<u32> = vec![];
    for num in b {
        if !result.contains(&num) {
            result.push(num);
        }
    }
    println!("{:?}", result);
    result
}

fn gcd(a: i32, b: i32) -> i32 {
    let first = a;
    let second = b;

    let remainder = -1;

    remainder
}

fn sock_pairs(vec: &[i32]) -> usize {
    let mut pair_count: usize = 0;
    let mut counts = vec![];
    for num in vec {
        let count = vec.iter().filter(|n| *n == num).count();
        counts.push(count);
    }
    println!("COUNTS: {:?}", counts);
    for count in counts {
        if count > 1 {
            if count % 2 == 0 {
                pair_count += count / 2;
            } else {
                pair_count += (count - 1) / 2;
            }
        }
    }

    pair_count
}

fn get_rankings(rankings: &[i32], player: &[i32]) -> Vec<i32> {
    let mut rankings_deduped = rankings.to_vec();

    rankings_deduped.dedup();

    println!("RANKINGS DEDUPED: {:?}", rankings_deduped);

    let mut final_score_rankings: Vec<i32> = Vec::new();

    for (i, score) in player.iter().enumerate() {
        println!("SCORE FROM PLAYER: {}", score);
        if let Some(same_score_index) = rankings_deduped
            .iter()
            .position(|ranked_score| ranked_score == score)
        {
            println!("IF SCORE IS CONTAINED: {}", score);
            final_score_rankings.push((same_score_index + 1).try_into().unwrap());
        } else if let Some(next_score_index) = rankings_deduped
            .iter()
            .position(|ranked_score| score > ranked_score)
        {
            final_score_rankings.push((next_score_index + 1).try_into().unwrap());
        } else {
            final_score_rankings.push((rankings_deduped.len() + 1).try_into().unwrap());
        }
    }

    final_score_rankings
}

fn main() {
    // let time = 21;
    // println!("The timer at time {} is {}", time, strange_counter(time));

    // let arr = vec![203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
    // let brr = vec![
    //     203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
    // ];
    // missing_numbers(arr, brr);

    // let vec1 = vec![2, 2, 3, 3, 3, 4, 6, 1];

    // let res = sock_pairs(&vec1);
    // println!("RESULT FROM SOCKS:  {}", res);

    let rankings_arr = [100, 100, 50, 40, 40, 20, 10];
    let player_arr = [5, 25, 50, 120];
    let result = get_rankings(&rankings_arr, &player_arr);
    println!("RESULT FROM RANKINGS: {:?}", result);
}
